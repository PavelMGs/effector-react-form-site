import React, { memo } from 'react';
import Layout from '@components/v1/layout';
import JsonExample from '@components/json-example';
import CodeHighlighter from '@components/code-highlighter';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SimpleForm, { form, examplesMap } from '@examples/simple-form';

type Props = {};

const Page: React.FC<Props> = ({}) => {
  return (
    <Layout menuKey="Examples">
      <h1>
        <FormattedMessage id="examples.simple-form.title" />
      </h1>
      <SimpleForm />
      <div className="row">
        <JsonExample source={form.$values} title="$values" />
        <JsonExample source={form.$fieldsInline} title="$fieldsInline" />
        <JsonExample source={form.$form} title="$form" />
      </div>
      <CodeHighlighter examplesMap={examplesMap} />
    </Layout>
  );
};

export default memo(Page);
