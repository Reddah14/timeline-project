<template>

	<q-card class="form-card">

		<form @submit.prevent="submitForm">

			<q-card-section>
				<div class="text-h6 heading">{{ type }} event</div>
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
							val => val.length < 301 || 'Please use maximum 300 characters'
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
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            eventToSubmit: {
                title: '',
                subtitle: '',
                body: ''
            }
        }
    },
	props: [
		'type',
		'event'
	],
	methods: {
		...mapActions('events', [
			'addEvent',
			'updateEvent'
			]),
		
		submitForm() {
			this.$refs.eventTitle.validate()
			this.$refs.eventSubtitle.validate()			
			this.$refs.eventDescription.validate()

				if (!this.$refs.eventTitle.hasError && !this.$refs.eventSubtitle.hasError 
					&& !this.$refs.eventDescription.hasError) {

					this.$emit('closeDialog')
					this.submitEvent()
				}
				else {
            		this.$objToaster.ToastifyError();
				}
		},
		submitEvent() {
			if (this.type == 'add') {
				this.addEvent(this.eventToSubmit)

            	this.$objToaster.ToastifyEventAdded();
				
			}
			else { 
				this.updateEvent(this.eventToSubmit)

            	this.$objToaster.ToastifyEventEdited(this.eventToSubmit.title);
			}			
		}
	},
	mounted() {
		if (this.type == 'edit') {
			this.eventToSubmit = Object.assign({},this.event)
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