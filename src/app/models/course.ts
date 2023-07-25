export class Course {
    constructor(
      public id: number,
      public name: string,
      public language: string,
      public description: string,
      public type: string,
      public platform: string,
      public file: string,
      public createdAt: string,
      public updatedAt: string){}
  }
