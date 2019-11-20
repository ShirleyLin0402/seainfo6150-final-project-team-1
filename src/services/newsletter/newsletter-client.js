import { HttpClient } from '../http/http-client';

export class NewsLetterServiceClient {
  static subscribe(email) {
    return HttpClient.send();
  }
}
