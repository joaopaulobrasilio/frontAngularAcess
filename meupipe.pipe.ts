import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSenha'
})
export class MeupipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {

    const exibir = args[0]

    return exibir ? value : '*******';

  }

}
