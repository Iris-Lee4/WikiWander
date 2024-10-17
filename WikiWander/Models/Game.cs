namespace WikiWander.Models
{
    public class Game
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public UserProfile? UserProfile { get; set; }
        public int StartArticleId { get; set; }
        public Article? StartArticle { get; set; }
        public int EndArticleId { get; set; }
        public Article? EndArticle { get; set; }
        public int StepCount { get; set; }
        public int Duration { get; set; }
        public DateTime TimeStamp { get; set; }
        public bool Completed { get; set; }

    }
}
