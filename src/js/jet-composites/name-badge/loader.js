/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./name-badge-view.html', './name-badge-viewModel', 'text!./component.json', 'css!./name-badge-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('name-badge', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);