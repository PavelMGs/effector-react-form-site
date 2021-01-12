import React, { memo } from 'react';
import MainLayout from '@components/main-layout';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SetValuesAdvanced, { form, examplesMap } from '@examples/set-values-advanced';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <MainLayout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.setValuesAdvanced.title" />
      </h1>
      <p>
        <FormattedMessage id="examples.setValuesAdvanced.description" values={{ br: <br /> }} />
      </p>
      <SetValuesAdvanced />
      <div className="row">
        <JsonExample source={form.$values} title="$values" />
        <JsonExample source={form.$fieldsInline} title="$fieldsInline" />
        <JsonExample source={form.$form} title="$form" />
      </div>
      <CodeHighlighter examplesMap={examplesMap} />
    </MainLayout>
  );
};

export default memo(Page);