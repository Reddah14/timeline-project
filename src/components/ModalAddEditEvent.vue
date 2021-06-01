<template>

	<q-card class="form-card">

		<form @submit.prevent="submitForm" @keyup.enter="submitForm">

			<q-card-section>
				<div class="text-h6 heading">{{ type }} event</div>
			</q-card-section>

			<q-card-section>

				<div class="row q-mb-md">
					<q-input
						v-model="eventToSubmit.title"
						:rules="[
							val => !!val || '* Required',
							val => val.length < 21 || 'Please use maximum 20 characters'
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
						label="Subtitle / Date"
						class="col"
						ref="eventSubtitle"
					>
						<template v-slot:append>
							<q-icon name="date_range" class="cursor-pointer">
								<q-popup-proxy :breakpoint="600">
									<q-date
										v-model="eventToSubmit.subtitle"
									>
										<div class="row items-center justify-end">
											<q-btn v-close-popup label="Close" color="primary" flat />
										</div>
									</q-date>						
								</q-popup-proxy>
							</q-icon>
						</template>

					</q-input>
				</div>

				<div class="row q-mb-md">
					<q-input
						v-model="eventToSubmit.body"
						:rules="[
							val => val.length < 501 || 'Please use maximum 500 characters'
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
			this.validateFormFields();

				if (!this.$refs.eventTitle.hasError && !this.$refs.eventSubtitle.hasError 
					&& !this.$refs.eventDescription.hasError) {

					this.$emit('closeDialog')
					this.submitEvent()
				}
				else {
            		this.$objToaster.ToastifyError('Enter the fields correctly !');
				}
		},
		submitEvent() {
			if (this.type == 'add') {
				this.addEventAxios()
			}
			else if (this.type == 'edit') { 
				this.editEventAxios()
			}
			else {
            	this.$objToaster.ToastifyError('There was an error !');
			}
		},
		validateFormFields() {
			this.$refs.eventTitle.validate()
			this.$refs.eventSubtitle.validate()			
			this.$refs.eventDescription.validate()
		},
		addEventAxios() {
            this.addEvent(this.eventToSubmit)
            this.$objToaster.ToastifyEventAdded();

/*          var params = {
					id: this.eventToSubmit.id,
                    nombre: this.eventToSubmit.title,
                    titulo: this.eventToSubmit.subtitle,
                    descripcion: this.eventToSubmit.body
                }
            this.$api.post('/v1/insertNewEvent', params)
        
                .then((response) => { // 
                    if ( response.status === 200 && response.data.affectedRows > 0 ) {
            //event added to database succesfully
			//here we will put the action that we want to execute when we receive the answer from the API
                        this.$objToaster.ToastifyEventAdded();
                    }       
      
                })
                .catch((err) => {
                    this.$objToaster.ToastifyError(err.message);
            })  */  			
		},
		editEventAxios() {
			this.updateEvent(this.eventToSubmit)
			this.$objToaster.ToastifyEventEdited(this.eventToSubmit.title);

/*          var params = {
					id: this.eventToSubmit.id,
                    nombre: this.eventToSubmit.title,
                    titulo: this.eventToSubmit.subtitle,
                    descripcion: this.eventToSubmit.body
                }
            this.$api.post('/v1/updateNewEvent', params)
        
                .then((response) => { // 
                    if ( response.status === 200 && response.data.affectedRows > 0 ) {
            //event added to database succesfully
			//here we will put the action that we want to execute when we receive the answer from the API
                        this.$objToaster.ToastifyEventEdited(this.eventToSubmit.title);
                    }       
      
                })
                .catch((err) => {
                    this.$objToaster.ToastifyError(err.message);
            })  */ 
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