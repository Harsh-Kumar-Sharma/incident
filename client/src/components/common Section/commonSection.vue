<template>
    <div class="container mt-5">
        <h6 class="mb-4"> Common Section</h6>
            <div class="row">
                <div class="col-3">
                <label for="lastIncidentID" class="form-label">Last Incident ID</label>
                <input v-model="lastIncidentID" type="text" class="form-control" id="lastIncidentID" disabled />
            </div>  
            <div class="col-3">
                <label for="lastIncidentDateTime" class="form-label">Last Incident Date & Time</label>
                <input v-model="lastIncidentDateTime" type="text" class="form-control" id="lastIncidentDateTime" disabled />
            </div>
            <div class="col-3">
                <label for="incidentID" class="form-label">Incident ID</label>
                <input v-model="incidentID" type="text" class="form-control" id="incidentID" disabled />
            </div>
            <div class="col-3">
                <label for="systemIncidentID" class="form-label">System Incident ID</label>
                <input v-model="systemIncidentID" type="text" class="form-control" id="systemIncidentID" />
            </div>
            </div>
           
           

            <!-- Incident Details Section -->
           
            
            <div class="mb-3">
                <label for="incidentTime" class="form-label">Incident Time</label>
                <input v-model="incidentTime" type="datetime-local" class="form-control" id="incidentTime" />
            </div>
            <div class="mb-3">
                <label for="incidentOccurredTime" class="form-label">Incident Occurred Time</label>
                <input v-model="incidentOccurredTime" type="datetime-local" class="form-control"
                    id="incidentOccurredTime" />
            </div>
            <!-- Add more form fields for Package, Incident Location, Direction, etc. -->
            <!-- Example: -->
            <div class="mb-3">
                <label for="package" class="form-label">Package</label>
                <select v-model="package" class="form-select" id="package">
                    <option>Select Package</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Initialize data properties here
            lastIncidentID: '',
            lastIncidentDateTime: '',
            incidentID: '',
            systemIncidentID: '',
            incidentTime: '',
            incidentOccurredTime: '',
            package: '' // Add more data properties for other fields
        }
    },
    methods: {
        submitForm() {
            // Handle form submission here
            // You can access form data using this.dataProperty
            // Example: console.log(this.systemIncidentID);
            // You can also make API requests or perform any other necessary actions.
        }
    }
}
</script>


