using AutoMapper;
using Ec.Business.Dto.Response;
using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Mappers
{
	public class AuthorMapper : Profile
	{
        public AuthorMapper()
        {
			CreateMap<Author, AuthorDto>().ReverseMap();
			CreateMap<Publisher, PublisherDto>().ReverseMap();
            CreateMap<Color, ColorDto>().ReverseMap();
        }
	}
}
