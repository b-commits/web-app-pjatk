/**
 * All achievements are added by manual INSERT statements.
 * Achievement name - achievement database ID in the [dbo].[achievement] table.
 */

/**@desc Leave one listing comment - DONE */
const INITIATION = 1;

/**@desc Leave five profile page comments - DONE */
const KEYBOARD_ENTHUSIAST = 2;

/**@desc Follow five people - DONE */
const STALKER = 3;

/**@desc Join ten listings */
const ENLISTED = 4;

/**@desc Upload custom profile picture */
const ART_ENTHUSIAST = 5;

/**@desc Granted on registration for "real" users - DONE */
const RECRUIT = 6;

/**@desc Send ten private messages - DONE */
const EPISTOLOGRAPHY = 7;

module.exports = {
  INITIATION,
  KEYBOARD_ENTHUSIAST,
  STALKER,
  ENLISTED,
  ART_ENTHUSIAST,
  RECRUIT,
  EPISTOLOGRAPHY,
};
