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
	public partial class T_MOBILEFILE_TODOWN
	{
		public T_MOBILEFILE_TODOWN ToPOCO(bool isPOCO = true){
			return new T_MOBILEFILE_TODOWN(){
				PKID = this.PKID,
				手机号 = this.手机号,
				时间 = this.时间,
				纬度 = this.纬度,
				经度 = this.经度,
				文件名 = this.文件名,
				线名 = this.线名,
				行别 = this.行别,
				里程 = this.里程,
				已提示 = this.已提示,
				火星纬度 = this.火星纬度,
				火星经度 = this.火星经度,
				百度纬度 = this.百度纬度,
				百度经度 = this.百度经度,
				文件类型 = this.文件类型,
				下载地址 = this.下载地址,
				是否原图 = this.是否原图,
				描述 = this.描述,
				C_TODOWN_ID = this.C_TODOWN_ID,
				缩略图路径 = this.缩略图路径,
				关联作业计划号 = this.关联作业计划号,
			};
		}
	} 
}
