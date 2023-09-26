using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Entities
{
	public class Color : BaseEntity
	{
        public int Id { get; set; }
        public string NameBangla { get; set; } = string.Empty;
		public string NameEnglish { get; set; } = string.Empty;
        public string Code { get; set; }
	}
}
