<template>
    <h4>Posts:</h4>
    <div v-if="jobPosts">
        <h3>posts is here</h3>
    </div>
</template>

<script>

import jobPostsRepository from '@/repositories/jobPostsRepository'

export default {
    data() {
        return {
            jobPosts: null,
            error: null
        }
    },
    async mounted() {
        try {
            let response = await jobPostsRepository.getJobPosts();
            this.jobPosts = response.data
        } catch (error) {
            this.error = error
        }
    }
}
</script>

<style>

</style>