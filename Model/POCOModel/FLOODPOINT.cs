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
	public partial class FLOODPOINT
	{
		public FLOODPOINT ToPOCO(bool isPOCO = true){
			return new FLOODPOINT(){
				PKID = this.PKID,
				线名 = this.线名,
				区间 = this.区间,
				起点里程 = this.起点里程,
				终点里程 = this.终点里程,
				长度 = this.长度,
				行别 = this.行别,
				侧别 = this.侧别,
				病害种类 = this.病害种类,
				级别 = this.级别,
				病害情况 = this.病害情况,
				备注 = this.备注,
			};
		}
	} 
}
