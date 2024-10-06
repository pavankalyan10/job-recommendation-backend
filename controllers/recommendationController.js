const jobs = require("../data/mockJobs");

const getRecommendations = (req, res) => {
  const userProfile = req.body;

  if (!userProfile || !userProfile.skills || !userProfile.preferences) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  const { skills, experience_level, preferences } = userProfile;
  const { desired_roles, locations, job_type } = preferences;

  const recommendations = jobs.filter(
    (job) =>
      desired_roles.includes(job.job_title) &&
      locations.includes(job.location) &&
      job.job_type === job_type &&
      job.experience_level === experience_level &&
      job.required_skills.some((skill) => skills.includes(skill))
  );

  res.json(recommendations);
};

module.exports = { getRecommendations };
