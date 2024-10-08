namespace WikiWander.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public UserProfile? UserProfile { get; set; }
        public string? Content { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
