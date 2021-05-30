<template>

	<q-card class="form-card">

		<form>

			<q-card-section>
				<div class="text-h6 heading">add event</div>
			</q-card-section>

			<q-card-section>

				<div class="row q-mb-md">
					<q-input
						v-model="eventToSubmit.title"
						:rules="[
							val => !!val || '* Required',
							val => val.length < 21 || 'Please use maximum 20 characters',
						]"
						autofocus
						filled
						label="Title"
						class="col"
						ref="eventTitle" 
					/>
				</div>

				<div class="row q-mb-md">
					<q-input
						v-model="eventToSubmit.subtitle"
						:rules="[
							val => val.length < 21 || 'Please use maximum 20 characters' 
						]"
						filled
						label="Subtitle"
						class="col"
						ref="eventSubtitle" 
					/>
				</div>            

				<div class="row q-mb-md">
					<q-input
						v-model="eventToSubmit.body"
						:rules="[
							val => val.length < 200 || 'Please use maximum 250 characters'
						]"
						filled
						label="Description"
						type="textarea"
						class="col"
						ref="eventDescription" 
					/>
				</div>
			
			</q-card-section>

			<q-card-actions align="right">
				<q-btn
					label="Cancel"
					color="negative"
					v-close-popup
				/>
				<q-btn
					type="submit"
					label="Save"
					color="green-14"
				/>
			</q-card-actions>
			
		</form>
  	</q-card>  
</template>

<script>
export default {
    data() {
        return {
            eventToSubmit: {
                title: '',
                subtitle: '',
                body: ''
            }
        }
    }
}
</script>

<style>
	.form-card {
		min-width: 400px;
	}
	.form-card .heading {
		text-transform: uppercase;
        text-align: center;
	}
	.form-card .q-card-section {
		width: 100%;
	}
</style>