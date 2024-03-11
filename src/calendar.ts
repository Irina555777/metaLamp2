
/*import VanillaCalendar, { Options } from '../node_modules/vanilla-calendar-pro';
import '../node_modules/vanilla-calendar-pro/build/vanilla-calendar.min.css';
import '../node_modules/vanilla-calendar-pro/build/themes/light.min.css';
import '../node_modules/vanilla-calendar-pro/build/themes/dark.min.css';


  const options: Options = {
    CSSClasses: {
        weekDay: 'arrow-smile',
      },
    
    input: true,
    type: 'multiple',
    settings: {
        
        lang: 'ru',

      range: {
        disablePast: true,
      },
      selection: {
        day: 'multiple-ranged',
      },
      visibility: {
        daysOutside: false,
      },
    },
    actions: {
      changeToInput(e: any, calendar: any, self: any) {
        if (!self.HTMLInputElement) return;
        if (self.selectedDates[1]) {
          self.selectedDates.sort((a: any, b: any) => +new Date(a) - +new Date(b));
          self.HTMLInputElement.value = `${self.selectedDates[0]} — ${self.selectedDates[self.selectedDates.length - 1]}`;
        } else if (self.selectedDates[0]) {
          self.HTMLInputElement.value = self.selectedDates[0];
        } else {
          self.HTMLInputElement.value = '';
        }
      },
    },
  };
  
  const calendarInput = new VanillaCalendar('#calendar-input', options);
  calendarInput.init();*/
 