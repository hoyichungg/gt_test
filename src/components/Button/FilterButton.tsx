import { FilterOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import React from 'react';
import { PopoverContent } from '../Content';

const FilterButton: React.FC = () => {
  return (
    <Popover placement="bottomLeft" content={<PopoverContent/>} trigger="focus" arrow={true}>
      <Button icon={<FilterOutlined />} size={'large'} />
    </Popover>
  );
};

export default FilterButton;
