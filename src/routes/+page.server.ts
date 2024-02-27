import { error } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		if (form.get('select-value') === 'undefined') {
			error(
				500,
				"Value should be empty but instead of empty string or null or undefined, it is the non-empty string, 'undefined'."
			);
		}

        return {
            formValue: form.get('select-value')
        }
	}
};
