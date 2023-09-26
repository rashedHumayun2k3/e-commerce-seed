using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Dto.Response
{
	public class BrandDto
	{
		public int Id { get; set; }
	    public string NameBangla { get; set; } = string.Empty;
        public string NameEnglish { get; set; } = string.Empty;
        public string Code { get; set; }
        public string CategoryIdList { get; set; } = string.Empty;
    }
}
