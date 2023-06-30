export class TitleError extends Error {}

function validateTitleNonEmpty(title: string) {
  if (title.replaceAll(/\s+/g, '') === '') {
    throw new TitleError('Title must not be empty');
  }
}

export function validateTaskTitle(title: string) {
  validateTitleNonEmpty(title);

  return true;
}

export class DescriptionError extends Error {}

function validateDescriptionNonEmpty(description: string) {
  if (description.replaceAll(/\s+/g, '') === '') {
    throw new DescriptionError('Description must not be empty');
  }
}

export function validateTaskDescription(description: string) {
  validateDescriptionNonEmpty(description);

  return true;
}
