export interface Mail {
	smtpServer: string;
	porta:string;
	username: string;
	password: string;
	destinatario: string;
	cc?: string;
	oggetto?: string;
	testo: string;
}