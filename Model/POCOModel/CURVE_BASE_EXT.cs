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
	public partial class CURVE_BASE_EXT
	{
		public CURVE_BASE_EXT ToPOCO(bool isPOCO = true){
			return new CURVE_BASE_EXT(){
				PKID = this.PKID,
				RAILBRACE = this.RAILBRACE,
				GAUGEROD = this.GAUGEROD,
				POLISHINGTIME = this.POLISHINGTIME,
				GRINDINGCYCLE = this.GRINDINGCYCLE,
				FLAGSOLIDOIL = this.FLAGSOLIDOIL,
				FLAGLIQUIDOIL = this.FLAGLIQUIDOIL,
				OBSERVATIONQUANTITY = this.OBSERVATIONQUANTITY,
				HWEARPHOTO = this.HWEARPHOTO,
				ALERTMESSAGE = this.ALERTMESSAGE,
				FLAGCHANGERAIL = this.FLAGCHANGERAIL,
				T_CRT_TM = this.T_CRT_TM,
				C_CRT_NAME = this.C_CRT_NAME,
				N_ORDER = this.N_ORDER,
				C_MEMO = this.C_MEMO,
				RAILTYPE = this.RAILTYPE,
			};
		}
	} 
}
