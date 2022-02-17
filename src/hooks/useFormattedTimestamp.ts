import { DateTime } from 'luxon';
import useLocalDateTime from './useLocalDateTime';

const useFormattedTimestamp = (value: string | undefined): string => {
  const timestamp = useLocalDateTime(value);
  return timestamp.hour === 0 && timestamp.minute === 0
    ? timestamp.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
    : timestamp.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
};

export default useFormattedTimestamp;
