import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Select } from '@codesandbox/components';

interface IPermissionSelectProps extends React.ComponentProps<typeof Select> {
  additionalOptions?: { value: string; label: string }[];
}

export const GhostSelect = styled(Select)`
  border: none;
  background-color: transparent;
`;

export const SELECT_WIDTH = 85;
export const PermissionSelect = ({
  additionalOptions = [],
  ...props
}: IPermissionSelectProps) => (
  <GhostSelect css={css({ width: SELECT_WIDTH })} {...props}>
    <option value="WRITE_CODE">Can Edit</option>
    {/* <option>Can Comment</option> */}
    <option value="READ">Can View</option>

    {additionalOptions.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </GhostSelect>
);
