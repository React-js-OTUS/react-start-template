import { ILayout } from '../../entities/interfaces';

export interface IModal extends ILayout {
  changeVisibility: () => void;
}
