import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React, { memo } from 'react';
interface IProps {}

const path = 'components.pages.resetOuterErrors.';

const ResetOuterErrors = ({}: IProps) => {
  return (
    <div className="ComponentRoot">
      <h1>resetOuterErrors</h1>
      <div>
        <FormattedMessage id={`${path}description`} />{' '}
        <Link to="/api/unit-types/$outer-errors-inline" className="Link">
          $outerErrorsInline
        </Link>
        .
      </div>
    </div>
  );
};

export default memo(ResetOuterErrors);
