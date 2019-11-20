import { HttpClient } from '../http/http-client';

export class ContactServiceClient {
  static contact(name, email, content) {
    return HttpClient.send();
  }
}
