import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import ptbr from 'dayjs/locale/pt-br';
dayjs.extend(customParseFormat);
dayjs.locale(ptbr);

export default dayjs;