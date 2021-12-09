const map = {
  'pages/api/unit-creators': {
    index: 'page',
    'create-form': 'page',
    'create-field-array': 'page',
  },
  'pages/api/unit-types/form': {
    index: 'page',
    $values: 'page',
    '$fields-inline': 'page',
    'set-value': 'page',
    '$errors-inline': 'page',
    '$outer-errors-inline': 'page',
    $form: 'page',
    $meta: 'page',
    '$all-form-state': 'page',
    'set-value': 'page',
    'set-values': 'page',
    'set-or-delete-error': 'page',
    'set-errors-inline-state': 'page',
    'set-field-state': 'page',
    'set-submitted': 'page',
    'reset-outer-field-state-flags': 'page',
    'reset-outer-errors': 'page',
    'set-or-delete-outer-error': 'page',
    'set-outer-errors-inline-state': 'page',
    'validate-form': 'page',
    submit: 'page',
    reset: 'page',
    'on-submit': 'page',
    'set-meta': 'page',
    'on-change-field-browser': 'page',
    'on-focus-field-browser': 'page',
    'on-blur-field-browser': 'page',
    'field-init': 'page',
    'get-name': 'page',
    'get-name-str': 'page',
    name: 'page',
  },
  'pages/api/unit-types/field-array': {
    index: 'page',
    form: 'page',
    push: 'page',
    remove: 'page',
  },
  'pages/api/hooks': {
    'use-form': 'page',
    'use-error': 'page',
    'use-field-array': 'page',
  },
  'pages/api/utils': {
    'delete-in': 'page',
    'get-in-and-get-in-ts': 'page',
    'set-in': 'page',
    'make-nested': 'page',
    'remove-from-inline-map': 'page',
    'create-name-helper': 'page',
  },
  components: {
    'nav-element': 'component',
    'language-switcher': 'component',
    spoiler: 'component',
  },
  'components/pages/unit-creators': {
    'create-form': 'component-api',
    'create-field-array': 'component-api',
  },
  'components/pages/unit-types/form': {
    index: 'component-api',
    $values: 'component-api',
    '$errors-inline': 'component-api',
    '$outer-errors-inline': 'component-api',
    '$fields-inline': 'component-api',
    $form: 'component-api',
    $meta: 'component-api',
    '$all-form-state': 'component-api',
    'set-value': 'component-api',
    'set-values': 'component-api',
    'set-or-delete-error': 'component-api',
    'set-errors-inline-state': 'component-api',
    'set-field-state': 'component-api',
    'set-submitted': 'component-api',
    'reset-outer-field-state-flags': 'component-api',
    'reset-outer-errors': 'component-api',
    'set-or-delete-outer-error': 'component-api',
    'set-outer-errors-inline-state': 'component-api',
    'validate-form': 'component-api',
    submit: 'component-api',
    reset: 'component-api',
    'on-submit': 'component-api',
    'set-meta': 'component-api',
    'on-change-field-browser': 'component-api',
    'on-blur-field-browser': 'component-api',
    'field-init': 'component-api',
    'get-name': 'component-api',
    'get-name-str': 'component-api',
    name: 'component-api',
  },
  'components/pages/unit-types/field-array': {
    index: 'component-api',
    form: 'component-api',
    push: 'component-api',
    remove: 'component-api',
  },
  'components/pages/hooks': {
    'use-form': 'component-api',
    'use-field-array': 'component-api',
    'use-error': 'component-api',
  },
  'components/pages/utils': {
    'delete-in': 'component-api',
    'get-in-and-get-in-ts': 'component-api',
    'set-in': 'component-api',
    'make-nested': 'component-api',
    'remove-from-inline-map': 'component-api',
    'create-name-helper': 'component-api',
  },
  'components/pages': {
    main: 'component',
  },
};

module.exports = { map, aliases: {} };
