import * as signalR from "@microsoft/signalr";// or from "@microsoft/signalr" if you are using a new library
import { Injectable } from '@angular/core';
import { globalEnvironment } from 'projects/shared-libraries/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SignalRService {
    private hubConnection: signalR.HubConnection | any
    public startConnection = (hubName: string): Subject<any> => {
        let sub = new Subject<any>();
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(`${globalEnvironment.baseUrl}/${hubName}`, {
                accessTokenFactory: () => `${localStorage.getItem(globalEnvironment.authKey)}`,
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Information)
            .build();
        this.hubConnection
            .start()
            .then(() => sub.next('Connection started'))
            .catch((err: any) => sub.next('Error while starting connection: ' + err))
        return sub;
    }
    testListener(eventName: string): Subject<string> {
        let sub = new Subject<string>();
        this.hubConnection.on(eventName, (data: any) => {
            sub.next(data);
            console.log(data)
        });
        return sub;
    }

    disposeConnection(): Subject<any> {
        let sub = new Subject<any>();
        this.hubConnection.stop().then((x: any) => sub.next('Connection ended'))
        return sub;
    }
}