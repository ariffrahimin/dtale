import * as React from 'react';
import { TFunction, withTranslation } from 'react-i18next';

import ButtonToggle, { ButtonToggleOption, ButtonToggleOptionValue } from '../ButtonToggle';

/** Component properties for HierarchyToggle */
interface HierarchyToggleProps {
  updateHierarchy: (heirarchy?: string) => void;
  t: TFunction;
}

const HierarchyToggle: React.FC<HierarchyToggleProps> = ({ updateHierarchy, t }) => {
  const [hierarchy, setHierarchy] = React.useState<ButtonToggleOptionValue>();

  React.useEffect(() => updateHierarchy(hierarchy as string), [hierarchy]);

  const options: ButtonToggleOption[] = [
    { label: t('Up-Down'), value: 'UD' },
    { label: t('Down-Up'), value: 'DU' },
    { label: t('Left-Right'), value: 'LR' },
    { label: t('Right-Left'), value: 'RL' },
  ];

  return (
    <div className="col-auto">
      <b>{t('Hierarchical Layout')}</b>
      <ButtonToggle options={options} update={setHierarchy} defaultValue={hierarchy} allowDeselect={true} />
    </div>
  );
};

export default withTranslation('network')(HierarchyToggle);
