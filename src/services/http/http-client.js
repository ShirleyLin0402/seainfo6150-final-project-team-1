export class HttpClient {
  static send() {
    return new Promise(resolve => {
      setTimeout(resolve, Math.random() * 4000);  
    });
  }
}
