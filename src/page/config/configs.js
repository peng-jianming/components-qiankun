import { Fields } from 'src/dependencies/fields/Fields';
import {
  ticketType,
  customerName,
  phoneNumber,
  feedbackChannel,
  problemHeppenTime,
  description,
  copyToPeople
} from 'src/dependencies/fields/create';
import RichTextEidtor from 'src/modules/component/rich-text-editor';
import UserChooserComponent from 'src/page/components/UserChooser';
const DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss';

export const configFields = new Fields([
  ticketType.clone().setFormItemWidth('400px'),
  customerName.clone().setFormItemWidth('400px'),
  phoneNumber.clone().setFormItemWidth('400px'),
  feedbackChannel,
  problemHeppenTime
    .clone()
    .setCustomize('valueFormat', DATE_FORMAT)
    .setFormItemWidth('600px'),
  description
    .clone()
    .setEditComponent(RichTextEidtor)
    .setFormItemWidth('600px'),
  copyToPeople
    .clone()
    .setFormItemWidth('600px')
    .setEditComponent(UserChooserComponent)
    .setCustomize('singleton', false)
]);
