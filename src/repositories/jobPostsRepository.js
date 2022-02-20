import api from '../api/api'

let baseUrl = "http://happy-jobs.test/api/v1";

const jobPostRepository = {
    getJobPosts() {
        return api.get(`${baseUrl}/job-posts`);
    }
}

export default jobPostRepository;