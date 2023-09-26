using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Dto.Response
{
	public class AuthorDto
	{
		public int Id { get; set; }
		public string NameBangla { get; set; } = string.Empty;
		public string NameEnglish { get; set; } = string.Empty;
        public string Code { get; set; }
        public string Mobile { get; set; } = string.Empty;
		public string Email { get; set; } = string.Empty;
		public string Address { get; set; } = string.Empty;
		public DateTime? DateOfBirth { get; set; }
		public DateTime? DateOfDeath { get; set; }
		public string ImageUrl { get; set; } = string.Empty;
		public string AboutAuthor { get; set; } = string.Empty;
	}
}
