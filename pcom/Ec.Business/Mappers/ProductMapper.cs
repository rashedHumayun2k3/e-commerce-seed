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
	public class ProductMapper : Profile
	{
		public ProductMapper() 
		{
			CreateMap<Product, ProductDto>()
             .ForMember(dest => dest.ProductName, opt => opt.MapFrom(src => src.Name))
			 .ForMember(dest=>dest.ProductHighlights, opt=> opt.MapFrom(src=>src.ProductHighlights))
             .ForMember(dest => dest.DetailContent, opt => opt.MapFrom(src => src.DetailContent))
             .ForMember(dest => dest.ModelSpecification, opt => opt.MapFrom(src => src.ModelSpecification))
			 .ForMember(dest=>dest.Thumbnail, opt=> opt.MapFrom(src=>src.Thumbnail))
             .ReverseMap();

            CreateMap<Brand, BrandDto>()
                .ForMember(dest => dest.NameEnglish, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.NameBangla, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.Code))
                .ReverseMap();
        }
	}
}
