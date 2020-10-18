import {WorkingDays} from "../working-days/working-days.entity"
export default class ItinerarioDTO{
    startDate: Date;
    endDate: Date;
    enabled: boolean;
    workingDays: WorkingDays;

}