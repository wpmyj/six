//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class WIND_BASEINFO
	{
		public WIND_BASEINFO ToPOCO(bool isPOCO = true){
			return new WIND_BASEINFO(){
				手机号 = this.手机号,
				监测点 = this.监测点,
				线名 = this.线名,
				行别 = this.行别,
				里程 = this.里程,
				部门编码 = this.部门编码,
				PKID = this.PKID,
				火星经度 = this.火星经度,
				火星纬度 = this.火星纬度,
				转发手机号 = this.转发手机号,
				区段 = this.区段,
				负责人 = this.负责人,
				排序 = this.排序,
			};
		}
	} 
}