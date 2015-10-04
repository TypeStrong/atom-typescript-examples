class B<T, U> {
   value: number = 2
   str: Array<string> = ['abc','bbc']
}

class C extends B<any , any> {
  value: number = 5
  str2: string = "10"
}
