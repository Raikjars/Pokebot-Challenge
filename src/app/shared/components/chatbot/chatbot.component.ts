import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { SendMessage } from '../../../state/actions/chatbot.actions ';
import { selectAllMessages, selectchatbotLoading } from '../../../state/selectors/chatbot.selector';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements OnInit{

  showChatbot: boolean = false;
  chatMessage: string = ""; //pregunta escrita en el campo de texto
  loadings$: Observable<boolean> = new Observable();
  messages$: Observable<any> = new Observable() //Lista de mensajes de la conversación

  @ViewChild('sp') scrollPanel: ElementRef; //se usa para actualizar el scroll
  @ViewChild('chatInput', {static: false}) inputEl: ElementRef; //se usa para quitar el foco del usuario del campo de mensajes

  constructor(
    private changeDetector : ChangeDetectorRef,
    private store: Store<any>
   ) {
    this.loadings$ = this.store.select(selectchatbotLoading);
    }

  ngOnInit(): void {
    this.store.select(selectAllMessages)
  }
    
  sendMessage(){ //envia la pregunta al back para generar la respuesta
    this.inputEl.nativeElement.blur(); //Se quita el foco del campo de texto

    let message = {
      role: 'user', 
      content: this.chatMessage,
      interaction_date: formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS', "en")
    };
    
    this.store.dispatch(SendMessage({message: message}));

    this.messages$ = this.store.select(selectAllMessages).pipe(
      tap(() => {
        this.chatMessage = "";
        this.scrollToBottom();
      })
    );

  }

  formatDate(date: any){ //formatea la fecha que se muestra en los mensajes del chat
    let dateA = date.split("-");
    let timeA = dateA[2].split(' ')[1].split(":");
    return <any>new Date(Date.UTC(dateA[0], dateA[1],dateA[2].split(' ')[0], timeA[0], timeA[1], timeA[2] ))
  }

  onKeydown(event: any){ //se usa para reiniciarlizar las interacciones del input y no ocurran errores de interaccion
    event.preventDefault();
  }

  scrollToBottom(): void { //Baja el scroll de la lista de mensajes baje completamente
    setTimeout(() => {
      this.changeDetector.detectChanges();
      if (this.scrollPanel) {
        this.scrollPanel.nativeElement.scrollTop = this.scrollPanel.nativeElement.scrollHeight;
      }
    }, 100);
  }

  toggleChatButton() {
    this.showChatbot = !this.showChatbot;
  }
}