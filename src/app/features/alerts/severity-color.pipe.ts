import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'severityColor'
})
export class SeverityColorPipe implements PipeTransform{
  transform(value: any): string {
    switch(value) {
      case 1:
        return '#27D85E';
      case 2:
        return '#65E15F';
      case 3:
        return '#8EE760';
      case 4:
        return '#ACE25D';
      case 5:
        return '#D2D959';
      case 6:
        return '#F2D255';
      case 7:
        return '#F2D255';
      case 8:
        return '#FFB248';
      case 9:
        return '#FF4D1F';
      case 10:
        return '#FF240F';
      default:
        return 'Black';
    }
  }

}
