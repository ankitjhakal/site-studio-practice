
/* *
 * @license
 */

(function ($, Drupal, once, drupalSettings) {
  'use strict';

  Drupal.behaviors.CohesionRowForColumns = {

    attach: function (context, settings) {

      $.each(once('coh-row-match-heights-init', '[data-coh-row-match-heights]', context), function () {

        var targets = $(this).data('cohRowMatchHeights');

        $('> .coh-row-inner', this).cohesionContainerMatchHeights({
          'targets': targets,
          'context': context
        });
      });
    }
  };

})(jQuery, Drupal, once, drupalSettings);
