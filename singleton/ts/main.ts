class SingletonTS {
  private static instance: SingletonTS;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTS {
    if (!this.instance) return new SingletonTS();

    return this.instance;
  }

}

console.log(SingletonTS.getInstance())
