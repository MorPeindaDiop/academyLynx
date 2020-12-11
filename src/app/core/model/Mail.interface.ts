export interface Mail {
    smtpServer: string;
	username: string;
	password: string;
    mittente: string;
	destinatario: string;
	cc: string;
	oggetto: string;
	testo: string;
}