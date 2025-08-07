import { renderLevelUpButton, renderWizardOnLevelUp } from './actor.js';
import { registerSettings } from './settings.js';

export const module_name = 'pf2e-level-up-wizard';

Hooks.on('ready', () => {
  registerSettings();
  const showButton = game.settings.get(module_name, 'show-level-up-button');
  const hook = showButton ? 'renderCharacterSheetPF2e' : 'updateActor';
  const handler = showButton ? renderLevelUpButton : renderWizardOnLevelUp;

  Hooks.on(hook, handler);
});
