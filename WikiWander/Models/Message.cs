namespace WikiWander.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public UserProfile? User { get; set; }
        public string? Content { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
