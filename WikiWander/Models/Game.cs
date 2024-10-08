namespace WikiWander.Models
{
    public class Game
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
        public int StartArticleId { get; set; }
        public Article? StartArticle { get; set; }
        public int EndArticleId { get; set; }
        public Article? EndArticle { get; set; }
        public int StepCount { get; set; }
        public int Duration { get; set; }

    }
}
