<script lang="ts">
	export let form;
	import * as Select from '$lib/components/ui/select';
</script>

<p>If the form was submitted successfully, its value will be shown below.</p>
<p>Try submitting the form without making a selection first.</p>
{#if form}
    <h1 class="text-4xl">{form.formValue ? form.formValue : '[empty string]'}</h1>
{/if}

<hr>

<form method="post">
	<Select.Root name="quality_select" >
		<Select.Input name="select-value" value="" />
		<label for="quality_select">Video Quality</label>
		<Select.Trigger class="w-[400px]">
			<Select.Value placeholder="(optional)"></Select.Value>
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="">Any</Select.Item>
			<Select.Item value="720p">720p</Select.Item>
			<Select.Item value="1080p">1080p</Select.Item>
			<Select.Item value="2160p">2160p</Select.Item>
		</Select.Content>
	</Select.Root>
    <input type="submit" />
</form>
